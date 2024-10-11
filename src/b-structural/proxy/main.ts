import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Pedro', 'pedroMiranda');
    console.log('This will take 2 seconds');
    console.log(await user.getAddresses());
}

clientCode();
