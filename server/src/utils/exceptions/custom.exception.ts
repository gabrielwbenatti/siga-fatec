import exceptionMessages from "./exception.messages";
import ExceptionType from "./exception.type";

class CustomException extends Error {
  constructor(type: ExceptionType) {
    /**
     * super(message) -> Sobe uma Exceção do tipo Error passando a mensagem por parâmetro de acordo com o ExceptionTyoe
     */
    super(exceptionMessages[type]);
    this.name = type;
  }
}

export default CustomException;
