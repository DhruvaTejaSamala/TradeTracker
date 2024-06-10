import React from 'react'
import { testIncomeStatementData } from './testData'

const data = testIncomeStatementData

type Props = {
  config: any;
  data: any;
}




const Table = ({config, data}: Props) => {
    const renderedRows = data.map((company: any) =>{
        return(
            <tr key={company.cik}>
                {config.map((val:any) => {
                    return(
                        <td className='p-4 whitespace-nowrap text-sm font-normal text-grey-900'>
                            {val.render(company)}
                        </td>
                    )
                })}
            </tr>
        )
    })

    const renderHeaders = config.map((configs:any)=>{
        return(
            <th className='p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider ' key ={configs.label}>
                {configs.label}
            </th>
        )
    })
  return (
    <div className="dark:bg-slate-800">    
        <div className='bg-white dark:bg-slate-800 dark:text-slate-200 shadow rounded-lg p-4 sm:p-6 xl:p-8'>
        <table>
            <thead className='min-w-full  m-5'>
                {renderHeaders}
            </thead>
            <tbody className='divide-y divide=grey-200 dark:[divide=grey-800]'>{renderedRows}</tbody>
        </table>
        </div>
    </div>
  )
}

export default Table