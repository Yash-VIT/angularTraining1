export function Course(config: any) {
    return function (target: any) {
        Object.defineProperties(target.prototype, "subject", {
            "value": config.name
        });
    }
}