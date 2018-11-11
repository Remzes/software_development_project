//Slider images
import IMAC from '../assets/Images/devices/mac_monitor.png';
import MACBOOK from '../assets/Images/devices/macbook_pro.png';
import IPHONE_8 from '../assets/Images/devices/iphone_8.png';
import MSI_LAPTOP from '../assets/Images/devices/msi_laptop.png';
//End of slider images

//Basic page images
import FIRST_IPAD from "../assets/Images/ipad-air-horizontal.png";
import SAMSUNG from "../assets/Images/samsung.png";
import MACBOOK_ROTATED from "../assets/Images/mackbook_rotated.png";
import MACBOOK_FRONT from "../assets/Images/mackbook_pro.png";
import IPAD_ROTATED from "../assets/Images/ipad_with_keys.png";
import IPAD_FRONT from "../assets/Images/ipad_with_keys_rotated_2.jpg";
//End of basic page images

//Function to load image
function loadImage(img) {
    return new Promise((resolve, reject) => {
        toDataURL(img, function (dataUrl) {
            resolve(dataUrl);
        })
    });
}

//Function to convert image to base 64
function toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

//Converted values
const IMAC_IMG_BASE64 = loadImage(IMAC);
const MACBOOK_IMG_BASE64 = loadImage(MACBOOK);
const MSI_IMG_BASE64 = loadImage(MSI_LAPTOP);
const PHONE_IMG_BASE64 = loadImage(IPHONE_8);
const FIRST_IPAD_BASE64 = loadImage(FIRST_IPAD);
const SAMSUNG_BASE64 = loadImage(SAMSUNG);
const MACBOOK_FRONT_BASE64 = loadImage(MACBOOK_FRONT);
const MACBOOK_ROTATED_BASE64 = loadImage(MACBOOK_ROTATED);
const IPAD_FRONT_BASE64 = loadImage(IPAD_FRONT);
const IPAD_ROTATED_BASE64 = loadImage(IPAD_ROTATED);
//End of converted values

export async function loadAllImages() {
    const SLIDER_CONFIGURATION_IMAGES = await Promise.all([IMAC_IMG_BASE64, MACBOOK_IMG_BASE64, MSI_IMG_BASE64, PHONE_IMG_BASE64]);
    const BASIC_IMAGES = await Promise.all([FIRST_IPAD_BASE64, MACBOOK_FRONT_BASE64, MACBOOK_ROTATED_BASE64, IPAD_FRONT_BASE64, IPAD_ROTATED_BASE64, SAMSUNG_BASE64]);

    return {
        SLIDER_CONFIGURATION: [
            {
                id: 0,
                device: "Apple iMac",
                image: SLIDER_CONFIGURATION_IMAGES[0],
                low_resolution_styles: {
                    carousel_item: {
                        width: "74%",
                        height: "auto",
                        top: "-15%",
                        left: "0"
                    },
                    carousel: {
                        height: "72vw",
                        margin: "50px 0 0"
                    },
                    device: {
                        width: "80%",
                        height: "auto",
                        marginLeft: "-40%"
                    }
                },
                high_resolution_styles: {
                    carousel_item: {
                        width: "41.6vw",
                        height: "auto",
                        top: "-4.35vw",
                        left: "-0.13vw"
                    },
                    carousel: {
                        height: "38vw",
                        margin: "50px 0"
                    },
                    device: {
                        width: "46.5vw",
                        height: "38vw",
                        marginLeft: "-23.25vw"
                    }
                }
            },
            {
                id: 1,
                device: "Apple Macbook Pro",
                image: SLIDER_CONFIGURATION_IMAGES[1],
                low_resolution_styles: {
                    carousel_item: {
                        width: "71%",
                        height: "auto",
                        top: "-12%",
                        left: ".3%"
                    },
                    carousel: {
                        height: "72vw",
                        margin: "50px 0 0"
                    },
                    device: {
                        width: "100%",
                        height: "auto",
                        marginLeft: "-50%"
                    }
                },
                high_resolution_styles: {
                    carousel_item: {
                        width: "38vw",
                        height: "auto",
                        top: "-4.4vw",
                        left: "-0.4vw"
                    },
                    carousel: {
                        height: "38vw",
                        margin: "50px 0"
                    },
                    device: {
                        width: "55vw",
                        height: "30vw",
                        marginLeft: "-27.5vw"
                    }
                }
            },
            {
                id: 2,
                device: "MSI GP72VR 7RFX",
                image: SLIDER_CONFIGURATION_IMAGES[2],
                low_resolution_styles: {
                    carousel_item: {
                        width: "64%",
                        height: "auto",
                        top: "-17%",
                        left: "1.5%"
                    },
                    carousel: {
                        height: "72vw",
                        margin: "50px 0"
                    },
                    device: {
                        width: "90%",
                        height: "auto",
                        marginLeft: "-45%"
                    }
                },
                high_resolution_styles: {
                    carousel_item: {
                        width: "35vw",
                        height: "auto",
                        top: "-5.8vw",
                        left: ".5vw"
                    },
                    carousel: {
                        height: "38vw",
                        margin: "50px 0"
                    },
                    device: {
                        width: "50vw",
                        height: "34vw",
                        marginLeft: "-25vw"
                    }
                }
            },
            {
                id: 3,
                device: "Iphone 8",
                image: SLIDER_CONFIGURATION_IMAGES[3],
                low_resolution_styles: {
                    carousel_item: {
                        width: "22%",
                        height: "auto",
                        top: "-27.3%",
                        left: "-0.2%"
                    },
                    carousel: {
                        height: "72vw",
                        margin: "50px 0 0"
                    },
                    device: {
                        width: "32%",
                        height: "auto",
                        marginLeft: "-16%"
                    }
                },
                high_resolution_styles: {
                    carousel_item: {
                        width: "12vw",
                        height: "auto",
                        top: "-9.4vw",
                        left: "0"
                    },
                    carousel: {
                        height: "38vw",
                        margin: "50px 0"
                    },
                    device: {
                        width: "17.7vw",
                        height: "34vw",
                        marginLeft: "-8.85vw"
                    }
                }
            },
        ],
        BASIC_IMAGES: {
            FIRST_IPAD: BASIC_IMAGES[0],
            MACBOOK_FRONT: BASIC_IMAGES[1],
            MACBOOK_ROTATED: BASIC_IMAGES[2],
            IPAD_FRONT: BASIC_IMAGES[3],
            IPAD_ROTATED: BASIC_IMAGES[4],
            SAMSUNG: BASIC_IMAGES[5],
        }
    };
}
