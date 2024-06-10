import React, { SyntheticEvent } from 'react'
import "./Cards.css"
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
    id : string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent)=>void;
}

const Cards: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div
      className="flex flex-col items-center justify-between w-full p-5 bg-slate-100 dark:bg-gray-700 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-veryDarkViolet dark:text-slate-100 md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-veryDarkBlue dark:text-slate-100">{searchResult.currency}</p>
      <p className="font-bold text-veryDarkBlue dark:text-slate-100">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
    )
}

export default Cards