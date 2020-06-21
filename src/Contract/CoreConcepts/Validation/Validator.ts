import Validatable from "./Validatable";

export default interface Validator {
    /**
     * 
     * @param target 
     * @throws TargetInvalidError
     */
    validate(target: Validatable): void;
}