export function logarTempoExeucao() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        return descriptor;
    }
}
