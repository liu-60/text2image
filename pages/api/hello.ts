// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/*
*{




    Name: "DEMO日历",
    Version: "1.0",
    Generated: "20250417T23207Z",
    Timezone: "Asia/Shanghai",
    Author: "LL60",
    URL: "https://github.com/lanceliao/china-holiday-calender",
    Years: {
        2025: [
            {
                Name: "截止时间",
                StartDate: "2025-08-09",
                EndDate: "2025-08-09",
                Duration: 1,
                CompDays: [],
                URL: "https://www.gov.cn/zhengce/content/202411/content_6986382.htm",
                Memo: "gap一年"
            },   
        ]
    }
}
*/

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    Name: 'DEMO日历',
    Version: '1.0',
    Generated: '20250417T23207Z',
    Timezone: 'Asia/Shanghai',
    Author: 'LL60',
    URL: 'https://github.com/lanceliao/china-holiday-calender',
    Years: {
        2025: [
            {
                Name: "截止时间",
                StartDate: "2025-08-09",
                EndDate: "2025-08-09",
                Duration: 1,
                CompDays: [],
                URL: "https://www.gov.cn/zhengce/content/202411/content_6986382.htm",
                Memo: "gap一年"
            }
        ]
    }
  })
}
