import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>ZickZack-Shos Pro max</title>
        <meta
          name="description"
          content="Sale! shoe nike version pro max"
        />
        <meta name="keywords" content="pro, max, shoe, shoes, nike" />
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
