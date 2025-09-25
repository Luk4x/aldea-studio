import { useCallback, useEffect, useRef, useState } from 'react';

import { useAskNeroContext } from '../../contexts/AskNero';

export function useCardsCarousel() {
  const [currentCardState, setCurrentCardState] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef<number | null>(null);
  const { handleDataAskedToNero } = useAskNeroContext();
  const lastBestIndexRef = useRef(0);

  const updateIndex = useCallback((index: number) => {
    setCurrentCardState(index);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (observerRef.current) observerRef.current.disconnect();

    const items = Array.from(container.children) as Array<HTMLElement>;
    if (items.length === 0) return;

    observerRef.current = new IntersectionObserver(
      entries => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          let bestIndex = lastBestIndexRef.current;
          let bestRatio = 0;

          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const target = entry.target as HTMLElement;
            const indexAttr = target.getAttribute('data-index');
            const index = indexAttr
              ? parseInt(indexAttr, 10)
              : items.indexOf(target);

            // Use intersection ratio to determine most visible card
            if (entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              bestIndex = index;
            }
          }

          if (bestIndex !== lastBestIndexRef.current && bestIndex >= 0) {
            lastBestIndexRef.current = bestIndex;
            updateIndex(bestIndex);
          }
        });
      },
      {
        root: container,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px 0px -128px 0px',
      },
    );

    items.forEach((el, idx) => {
      el.setAttribute('data-index', String(idx));
      observerRef.current?.observe(el);
      // ensure snap alignment on items
      if (!el.style.scrollSnapAlign) el.style.scrollSnapAlign = 'start';
    });

    return () => {
      observerRef.current?.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    handleDataAskedToNero(currentCardState);
  }, [currentCardState, handleDataAskedToNero]);

  return { containerRef };
}
