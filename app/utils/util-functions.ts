import { UAParser } from "ua-parser-js";

export function getDesktopInfo(userAgent: string) {
    const parser = new UAParser(userAgent);

    const deviceType = parser.getDevice().type; // undefined means desktop
    const isDesktop = !deviceType;

    if (!isDesktop) {
        return {
            isDesktop: false,
            desktopOS: null as null
        };
    }

    const os = parser.getOS().name?.toLowerCase() || "";

    let desktopOS: "Windows" | "macOS" | "Linux" | null = null;

    if (os.includes("windows")) desktopOS = "Windows";
    else if (os.includes("mac")) desktopOS = "macOS";
    else if (os.includes("linux")) desktopOS = "Linux";

    return {
        isDesktop,
        desktopOS
    };
}
