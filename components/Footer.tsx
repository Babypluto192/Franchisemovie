import classes from "./style/footer.module.scss";


export default  function Footer () {
    return (
        <div>
            <footer className={classes.footer}>
                <p>© 2023  </p>
                    <p> Написано на NEXT JS + SCSS + TS + DJANGO</p>

            </footer>
        </div>
    );
};

