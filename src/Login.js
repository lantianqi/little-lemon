import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Login() {
  return (
    <>
      <Header />
      <Nav />
      <div className="login_container">
        <h1>Login</h1>
      </div>
      <Footer />
    </>
  );
}

export default Login;