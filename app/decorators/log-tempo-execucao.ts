export function logarTempoExeucao() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de excução ${propertyKey}: ${(t2 - t1)} ms`);
            return retorno;
        };
        return descriptor;
    }
}
