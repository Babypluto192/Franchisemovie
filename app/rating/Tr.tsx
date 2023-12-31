import NextImage from "next/image";
import classes from "./rating.module.scss";
import Link from "next/link";

interface Iprops {
    nomer: number
    photo: string
    name: string
    points: number

}

const Tr = (props: Iprops) => {
    return (

            <tr >
                <td>{props.nomer}</td>
                <th> <NextImage src={props.photo} alt='placeholder' width={40}  height={40} className={classes.image}/> </th>
                <td><Link className={classes.link} href={`/heroes/${props.nomer}`}>{props.name} </Link> </td>
                <td>{props.points}</td>
            </tr>

    );
};

export default Tr;