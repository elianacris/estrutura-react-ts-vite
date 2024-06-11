import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputComponent from "../../../../components/Input/Input";
import {
  SignInTypes,
  signInSchemaValidation,
} from "../../../../validators/signInSchemaValidation";
// import CustomButton from "../../../../components/Button/Button";

//Componente form que tem um exemplo de como usar o useForm do react-hook-form e o yupResolver para fazer a validação do formulário
//e o useNavigate do react-router-dom para fazer a navegação entre as rotas

const Form = () => {
  const navigate = useNavigate();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>({
    resolver: yupResolver(signInSchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInTypes) => {
    if (data) {
      navigate("/home");
      reset();
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <div className="flex justify-center items-center rounded-lg border shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col justify-center gap-3 px-7 py-7 items-center   "
      >
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h1 className="text-2xl font-semibold">Acesse sua conta</h1>
        <InputComponent
          label={"E-mail"}
          type="email"
          className="mt-1"
          error={errors.email && "E-mail é obrigatório"}
          name="email"
          control={control}
        />
        <InputComponent
          label={"Senha"}
          type="password"
          className="mt-2 mb-5"
          error={errors.password && "Senha é obrigatória"}
          name="password"
          control={control}
        />

        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-400 font-medium hover:text-black"
        >
          Entrar
        </button> 
        {/*  esse é um componente de button  */}
        {/* <CustomButton
          children="Entrar"
          onClick={() => console.log("clicou aqui")}
          disabled={false}
        /> */}
      </form>
    </div>
  );
};

export default Form;
