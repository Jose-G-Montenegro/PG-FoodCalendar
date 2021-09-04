import React, { useEffect }from 'react'
import {useSelector, useDispatch} from 'react-redux' 
import { useParams } from 'react-router-dom';
import { getDetail } from '../../actions'
import style from '../../Styles/StyleDetail.module.css';
import easy from '../../Image/easy.png'
import hard from '../../Image/hard.png'
import medium from '../../Image/medium.png'
import CardRelacionadas from '../CardRelacionadas/CardRelacionadas';



export default function DetailRecipe() {

        const {id} = useParams()
        const dispatch = useDispatch()
        const recipeDetail = useSelector(state => state.detail)
        
        //Lo despacho
        useEffect(() => {
            dispatch(getDetail(id))
           }, [dispatch,id])

        return (
                <div>
                    <img className={style.img} src={recipeDetail.img} alt='imagen de comida'  width='500px' /> 

                    <h3>{recipeDetail.name}</h3>

                    <h5 className={style.ingredientes}> Ingredientes : {recipeDetail.ingredients?.map(x =>(
                      <table class={style.content}><tr>
                      <td>  <h4>{x.name}</h4></td>
                      <td>  <h6>{x.unit}</h6></td>
                      </tr></table>
                        ) )} </h5>
                    
                    <div className={style.dificulty}>{recipeDetail.difficulty ==='Fácil'?
                            <h4 class="card-text" id={style.normal}>Dificultad: {recipeDetail.difficulty}  
                            <img width="100px"  src= {easy} alt='easy'/></h4>
                            : recipeDetail.difficulty==='Moderado'?
                                <h4 class="card-text" id={style.normal} >Dificultad: {recipeDetail.difficulty}  
                                <img width="100px" src= {medium} alt='medium'/></h4>
                                :<h4 class="card-text" id={style.normal} >Dificultad: {recipeDetail.difficulty}  
                                    <img width="100px" src= {hard} alt='hard'/></h4>
                           }                  
                      </div><br/>
                    <h3 className={style.rating}>Rating: {recipeDetail.rating}</h3>

                    <h3 className={style.dificulty}>Categorias: {recipeDetail.category?.map(x =>(
                      <table class={style.content}><tr>
                      <td>  <h4>{x}</h4></td>
                      </tr></table>))}</h3>

                    <p className={style.normal}>
                    <h3 >Instrucciones:</h3><br/>{recipeDetail.preparation}
                    </p>
                    <h2> Recetas Relacionadas</h2>
                    <CardRelacionadas/>

                </div>
        )
}