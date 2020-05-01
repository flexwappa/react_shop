import React from 'react';
import Header from "../../Components/Header/Header";
import woman from "../../Pictures/woman.jpg";
import Button from "../../Components/Button/Button";



const MainPage = (props) => {
    const styles = {
            woman : {
                background: "pink",
                height: "90vh"
            },
            man : {
                background: "black",
                height: "90vh"
            }

        }
    return (
        <div className="container-fluid p-0">
            <Header/>
            <div className="row d-flex col-lg-12 m-0 p-0">
                <div style={styles.woman} className="col-lg-6 border d-flex align-items-center justify-content-center p-0">
                    <Button clicked={()=> alert("переход на /garderob/woman")} text={"Женское"}/>
                </div>
                <div style={styles.man} className="col-lg-6 border d-flex align-items-center justify-content-center p-0">
                    <Button clicked={() => alert("переход на /garderob/man")} text={"Мужское"}/>
                </div>

            </div>
        </div>
    );
}

export default MainPage;
