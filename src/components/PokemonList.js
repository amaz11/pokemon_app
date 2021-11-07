import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetpokemonList } from '../redux/action/pokemonAtion'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const PokemonList = (props) => {
    const [saerch, setSaerch] = useState("");
    const dispatch = useDispatch()
    const pokemonList = useSelector(state=>state.pokemonListReducer)
    // console.log(pokemonList)

    const FetchData = (page) =>{
        dispatch(GetpokemonList(page))
    }

    useEffect(() => {
        FetchData(1)
     },[])
    const showData = ()=>{

        if(pokemonList.loading){
            return <p>Loading...</p>
        }

        if(!_.isEmpty(pokemonList.data)){
            return (
                <div className='list-wapper'>
            {pokemonList.data.map(pok=>{
                return(
                    <div className='pokemon-item' key={pok.name}>
                    <p>{pok.name}</p>
                    <Link to={`/pokemon/${pok.name}`}>More...</Link>
                    </div>
                )
            })
            }</div>)
        }

        if(pokemonList.errorMsg !==""){
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>UnAble to Get Data</p>
    }
    return (
        <div>
          {/* <h1>From Pokemon List</h1>  */}
          {/* <div class="card">
            <img src="" alt="Denim Jeans" style="width:100%">
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>  */}
        <div className='search-wrapper'>
            <input type="text" onChange={e=> setSaerch(e.target.value)} />
            <button onClick={()=>props.history.push(`/pokemon/${saerch}`)}>Search</button>
        </div>
        {showData()}
        {!_.isEmpty(pokemonList.data) && (
            <ReactPaginate 
            pageCount ={Math.ceil(pokemonList.count/16)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={data => FetchData(data.selected + 1)}
            containerClassName = 'pagenation'
            />
        )}
        </div>
    )
}

export default PokemonList
