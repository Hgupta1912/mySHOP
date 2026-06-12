import { Outlet, useParams } from 'react-router'; //Outlet not really used; replaces by names and useParam() (no clue how to utilize useParams...)

const { name } = useParams(); //gets the dynamic segment string name and puts it into const name
