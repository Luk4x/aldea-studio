import { FirstCardContent } from '../components/HomeCardsList/components/FirstCardContent';
import { SecondCardContent } from '../components/HomeCardsList/components/SecondCardContent';

export const data = [
  {
    title: 'Mahler’s 9th is playing in Teatro Colon',
    content: <FirstCardContent />,
    actions: [
      {
        content: 'Get Tickets',
        className: 'w-[7.6875rem]',
      },
      {
        content: 'Get Directions',
        className: 'w-[7.8125rem]',
      },
    ],
  },
  {
    title: 'You are meeting Jack, Matty and Carlos',
    content: <SecondCardContent />,
    actions: [
      {
        content: (
          <span key="send-email-to-matty">
            Send an email to <span className="font-semibold">Matty</span>
          </span>
        ),
        className: 'w-[11.5625rem]',
      },
      {
        content: 'Add an agenda to the Event',
        className: 'w-[12.375rem]',
      },
      {
        content: 'Add an agenda to the Google Calendar Event',
        className: 'w-[18.25rem]',
      },
    ],
  },
];
