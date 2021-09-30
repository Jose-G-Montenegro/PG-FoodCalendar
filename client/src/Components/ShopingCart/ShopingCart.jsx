import React, { useEffect, useState } from "react";
import Recipes from "./Recipes/Recipes";
import { useSelector, useDispatch } from "react-redux";
import { cleanNewCalendar, clearInventary, postcalendar } from "../../actions/index";
import style from "../../Styles/StyleCardShop.module.css";
import { Link } from "react-router-dom";
import '@lourenci/react-kanban/dist/styles.css';
import { useHistory } from "react-router";
import InventaryNav from '../Inventary/InventaryNav';

export default function ShopingCart() {

  const dispatch = useDispatch();
  const [text, setText] = useState("")
  const calendar = useSelector(state => state.sendCalendar)
  const token = useSelector(state => state.token)
  const newCalendar = useSelector(state => state.newCalendar)
  const history = useHistory()

  useEffect(() => {
    if (newCalendar) {
      history.push('calendar/user')
      dispatch(cleanNewCalendar())
      dispatch(clearInventary())
    }
  }, [dispatch, newCalendar, history])

  const onSubmit = () => {

    dispatch(postcalendar({ name: text, calendar: calendar }, token));
  };
  const handeChange = (event) => {
    setText(event.target.value)
  };

  return (
    <div className={style.con}>

      <div className={style.contenAll}>
        <div className="mb-3" id={style.margin}>
          <label className="form-label">Ingresa el nombre de tu calendario</label>
          <input id={style.nameCalendar} type="text" onChange={(e) => handeChange(e)} />
        </div>
        <div className={style.buttonsContent}>
          <Link id={style.btn} className='btn btn-primary'to="/AllRecipe" >Agregar más recetas</Link>
          
          {
            !!token ?
            <button id={style.btn} className='btn btn-primary' onClick={onSubmit}>Guardar calendario</button>:
            <Link to='/acount/login' id={style.btn} className="btn btn-secondary" >Guardar calendario</Link>
          }
          <Link id={style.btn} className='btn btn-primary' to="/calendar">Ver mis calendarios</Link>
        </div>
          <Recipes />
        <InventaryNav />
      </div>
    </div>
  );
}