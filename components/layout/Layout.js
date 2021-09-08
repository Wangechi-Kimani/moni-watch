import classes from './Layout.module.css';
import Navigation from './Navigation';
import TopNav from './TopNav';
import Footer from "./Footer";
import ScrolloTop from './ScrollToTop';

function Layout(props) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <TopNav />
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <ScrolloTop showBelow={250}/>
      <Footer />
    </div>
  );
}

export default Layout;
