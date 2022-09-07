import MyHead from "./MyHead";
import MyFooter from "./MyFooter";

const DefaultTemplate = ({title, children}) =>
    <>
        <MyHead title={title}/>
            <main>
                {children}
            </main>
        <MyFooter/>
    </>

export default DefaultTemplate