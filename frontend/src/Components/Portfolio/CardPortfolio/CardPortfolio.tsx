import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props  {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent)=>void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="flex flex-col size-60 w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 dark:text-slate-200 dark:bg-gray-800">
      <Link to={`/company/${portfolioValue.symbol}/company-profile`} className=" text-sm font-bold">{portfolioValue.companyName}</Link>
      <Link to={`/company/${portfolioValue.symbol}/company-profile`} className="pt-2 text-xl font-bold">{portfolioValue.symbol}</Link>
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  )
}

export default CardPortfolio