import React from "react";
import { Days } from "../Days/Days";
import s from './Home.module.scss'
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay />
                <ThisDayInfo />

            </div>
            <Days />
        </div>
    )
}