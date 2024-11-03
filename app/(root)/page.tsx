import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import React from 'react'

const Home = () => {

    const loggedIn = {firstName: 'Lakshya' , lastName:'Bhardwaj' , email: 'labhansh40527@gmail.com'};

    
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type='greeting'
                    title='Welcome,'
                    user={loggedIn?.firstName || 'Guest'}
                    subtext = 'Access and manage your account and transactions efficently!'
                />

                <TotalBalanceBox 
                accounts = {[]}
                totalBanks={1}
                totalCurrentBalance={1230.78}
                />
            </header>

            RECENT TRANSACTIONS
        </div>


        <RightSideBar
        user = {loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50} , {currentBalance:500.00}]}
        />
    </section>
  )
}

export default Home