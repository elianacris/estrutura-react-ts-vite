export interface CustomFile extends File {
  file: File;
  hashName: number;
}

export function dateFormat(dateString: string | Date): string {
  const data = new Date(dateString);

  if (!dateString) {
    return "";
  }

  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

export function transformarDataFormato(input: string): string {
  const [ano, mes, dia] = input.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function formatCpf(cpf: string): string {
  cpf = cpf.replace(/\D/g, "").slice(0, 11);
  const match = cpf.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
  if (match) {
    const formattedValue =
      match[1] +
      (match[2] ? "." : "") +
      match[2] +
      (match[3] ? "." : "") +
      match[3] +
      (match[4] ? "-" : "") +
      match[4];
    return formattedValue;
  }
  return cpf;
}
export const formatarNumero = (input: string): string => {
  const numerico = input.replace(/[^\d]/g, "");
  const limiteTamanho = numerico.slice(0, 8);
  const formatted = limiteTamanho.replace(/(\d{4})(\d{4})/, "$1/$2");

  return formatted;
};
export const titlePage = (etapa: number) => {
  switch (etapa) {
    case 1:
      return "Nome 1";
    case 2:
      return "Nome 2";
    case 3:
      return "Nome 3";
    case 4:
      return "Nome 4";
    case 5:
      return "Nome 5";
    case 6:
      return "Nome 6";
    case 7:
      return "Nome 7";

    default:
      return "Etapa não encontrada";
  }
};
export function validateCpf(cpf: string) {
  cpf = cpf.replace(/[^0-9]/g, "").slice(0, 11);

  let sum;
  let rest;
  sum = 0;

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
  }

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
  }

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export function firstNameAndLastName(name: string) {
  if (name.split(" ").length <= 1) return false;
  return name.split(" ")[1].length >= 2 ? true : false;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatCurrency(value?: number): string {
  if (value === undefined || value === null) {
    return "0,00";
  }

  const formattedValue = value.toFixed(2);
  const [integerPart, decimalPart] = formattedValue.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  return `${formattedIntegerPart},${decimalPart}`;
}

export function typeNumberInt(value: string | number) {
  const x = parseInt(value as string);
  return Number.isInteger(x);
}

export function removeEmptyValues(
  object: Record<string, string | number | Date>
) {
  Object.keys(object).map((e) => {
    if (!object[e]) {
      delete object[e];
    }
  });
  return object;
}

export function translateGender(sex: string) {
  if (sex == "M") {
    return "Masculino";
  } else if (sex == "F") return "Feminino";
  else return "";
}

interface QueryParams {
  [key: string]: string | boolean | number;
}

export function getQueryParams(url: string): QueryParams {
  if (!url) return {};
  const urlArr = url.slice(1).split("&");
  const params: QueryParams = {};
  urlArr.forEach((element: string) => {
    const item = element.split("=");
    params[item[0]] = decodeURI(item[1]) || true;
  });
  return params;
}

export function arraysIsEqual<T>(array1: T[], array2: T[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }
  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();
  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2);
}

export function validarTelefone(telefone: string): boolean {
  const numeroApenasNumeros = telefone.replace(/\D/g, "");

  if (numeroApenasNumeros.length !== 11) {
    return false;
  }

  if (/^\d+$/.test(numeroApenasNumeros)) {
    return true;
  }

  return false;
}

export function padZeros(value: number, length: number) {
  const stringValue = String(value);
  const zerosToAdd = Math.max(0, length - stringValue.length);
  return "0".repeat(zerosToAdd) + stringValue;
}

export function formatarCNPJ(cnpj: string | undefined) {
  return (cnpj ?? "").replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );
}

export const compareHashNames = (
  hashNames: number[],
  newSelectedFiles: CustomFile[]
) => {
  const hashNamesSet = new Set(hashNames.map((hashName) => hashName));

  newSelectedFiles.forEach((hashName) => {
    if (!hashNamesSet.has(hashName.hashName)) {
      hashNamesSet.add(hashName.hashName);
      hashNames.push(hashName.hashName);
    }
  });
  return hashNames;
};

export function formatCurrencyBR(value: string): string {
  let newValue = value.replace(/\D/g, "");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
  newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return newValue;
}
export function formatCurrencyUS(value: string): string {
  let newValue = value.replace(/\D/g, "");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1.$2");
  newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ",");
  return newValue;
}

export function formatarValor(valor: number) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

/**
 * Lista de dominios que são bloqueados para e-mail alternativo
 * @return {string} dominios
 */
export const blockedEmailDomains = ["seduc.go.gov.br"];

export function transformLetters(value: string): string {
  const newValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  return newValue;
}
/**
 *
 * @param value valor string de numero para ser formatado
 * re
 * @returns faz a formatação e devolve no formato "(XX) XXXXX-XXXX"
 */
export function transformPhone(value: string) {
  const numericValue = value.replace(/\D/g, "");
  const formattedValue = numericValue.replace(
    /^(\d{2})(\d{5})(\d{4})$/,
    "($1) $2-$3"
  );
  return formattedValue;
}

export const abreviarNome = (nomeCompleto: string) => {
  if (nomeCompleto === undefined || nomeCompleto === null) return "";
  const partesNome = nomeCompleto.split(" ");
  if (partesNome.length < 2) {
    return nomeCompleto;
  }

  const primeiroNome = partesNome[0].charAt(0).toUpperCase();
  const segundoNome = partesNome[1].charAt(0).toUpperCase();

  return `${primeiroNome}${segundoNome}`;
};

export const mostrarDoisNomes = (nomeCompleto: string) => {
  if (nomeCompleto === undefined || nomeCompleto === null) return "";
  const partesNome = nomeCompleto.split(" ");
  if (partesNome.length < 2) {
    return nomeCompleto;
  }

  const primeiroNome = partesNome[0];
  const segundoNome = partesNome[1];

  return `${primeiroNome} ${segundoNome}`;
};

// export const hora = (dataHora: string): string => {
//   const data = new Date(dataHora);
//   const horas = data.getUTCHours();
//   const minutos = data.getUTCMinutes();
//   const segundos = data.getUTCSeconds();

//   return `${horas.toString().padStart(2, "0")}:${minutos
//     .toString()
//     .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
// };
export const hora = (dataHora: string): string => {
  const data = new Date(dataHora);
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
};
