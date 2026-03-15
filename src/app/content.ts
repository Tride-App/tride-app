export const trideRoutes = ['Kaduna to Abuja', 'Abuja to Jos', 'Lagos to Ibadan']

export const trideHighlights = [
    'USDC escrow locks booking funds before departure.',
    'Passenger-signed boarding prevents fake completions.',
    'Arrival timeouts unblock payout without admin arbitration.',
]

export const trideSteps = [
    {
        label: '01',
        title: 'Drivers publish real seats',
        body: 'Trips carry route, departure time, seat count, and fare so passengers book against actual inventory instead of message threads.',
    },
    {
        label: '02',
        title: 'Passengers fund escrow',
        body: 'Bookings settle in USDC on Stellar, creating a transparent on-chain receipt before anyone shows up at pickup.',
    },
    {
        label: '03',
        title: 'Settlement follows rules',
        body: 'Check-in, cancellation windows, no-shows, and payout finalization all follow deterministic contract logic.',
    },
] as const

export const tridePrinciples = [
    'No custodial wallet balance held by the platform.',
    'On-chain payments with off-chain trip coordination.',
    'Designed for corridor-based rollout before expansion.',
]

export const trideHealthHref = 'http://localhost:3000/api/health'