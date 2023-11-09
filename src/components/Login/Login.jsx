import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { userLogin } from "../Services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleLogin = async (event) => {
    event.preventDefault();
  
    const { email, password } = formData;
  
    if (!email || !password) {
      toast.error('Please enter your email address and password.');
      return;
    }
  
    try {
      const response = await userLogin({ email, password });
      const accessToken = response.data.token.access;
      localStorage.setItem('AccessToken', accessToken);
  
      MySwal.fire({
        title: <strong>Login Successful</strong>,
        icon: 'success',
        text: `Welcome back, ${email}!`,
      });
  
      await navigate('/products');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/bf10/fecd/29b9dcf39db187c681d3ea591c19fc4c?Expires=1700438400&Signature=kGapCyLyoAWj~zc1aRCuR-suEBBDNX5aROsnUMNNtzwN7EmxLPChMcNFCYJjub~-ClwJyzvg~SUrdpHB-TmLe53sT-lD8bio4FzTFG6xIw1sihxwwilhIYduBFKegq0Fm4Z3Q6malZqo~Doj-vLCESzjLqsUQaUqKRhZfpinczBhzcojv4mTS8VnSd7ATVgV0hBjfYHraTXj3TPtJgO57kcmX2wJJ9zw-EC-4DQTHCDhtEGWANkn~XWcG6D~3NIOmTMSktJxtvKze4xm5PY~oMz7oStZIe7mNW2pHegjBd7uI5tXIhHMjpA4-~omRNmawdbChOIieQmQD3j2w3zCNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
      }}
    >
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center my-16  text-4xl">Welcome</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            type="email"
            placeholder="email address"
            className="border p-3 rounded-lg"
            id="email"
          />
          <input
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
          />
          <button
            
            type="submit"
            className="relative px-5 py-2.5 inline-flex items-center justify-center text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            Login
          </button>
          <div className="flex gap-2 mt-5">
            <p>
              Don't have an account?,{" "}
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href="#"
              >
                register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
