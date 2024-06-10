import React, { SyntheticEvent } from 'react'
import Cards from '../Cards/Cards';
import { CompanySearch } from '../../company';
import {v4 as uuidv4} from "uuid";


interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResults, onPortfolioCreate}: Props): JSX.Element => {
  return <><div className="flex flex-col mx-auto md:h-screen space-y-4">
  {searchResults.length > 0 ? (
    searchResults.map((result) =>{
      return <Cards id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
    })
  ):(
    <p className="mb-3 mt-3 text-xl h-full font-semibold text-center md:text-xl dark:text-slate-200">
    No Results!
    </p>
  )}
  </div>
  </>;
};

export default CardList;