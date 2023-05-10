import React from 'react'
import coinApi from '../api/coinApi'
import { useQuery } from '@tanstack/react-query'

function Homepage() {
   const { data, isLoading, error } = useQuery(
      ['global-market'],
      coinApi.getGlobalMarket
   )
   console.log('render') //Count component render times when use react-query => 2 times

   return <div>Homepage</div>
}

export default Homepage
