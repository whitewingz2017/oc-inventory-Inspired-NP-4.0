import { Help } from '../Options/Help/Help'
import { Settings } from '../Options/Settings/Settings'
import { AccessoriesLeft } from './Components/AccessoriesLeft/AccessoriesLeft'
import { AccessoriesRight } from './Components/AccessoriesRight/AccessoriesRight'
import { CharacterInformation } from './Components/CharacterInformation'
import { CharacterWounding } from './Components/CharacterWounding/CharacterWounding'
import { Header } from './Components/Header/Header'

import Polygon from '../../../../assets/polygon.png'
import Polygon1 from '../../../../assets/polygon1.png'

export const Character = () => {
    return (
        <div
            id="character"
            class="relative pl-6 pr-6"
        >
            <Header />

            <div
                class="relative"
            >
                <div
                    class="flex h-20 w-full"
                >
                    <div
                        class="relative mt-1"
                    >
                        <img
                            class="absolute left-4 top-4 h-12 w-12"
                            alt=""
                            src={Polygon}
                        />

                        <img
                            class="absolute left-4 top-2 h-12 w-12"
                            alt=""
                            src={Polygon1}
                        />

                        <span
                            class="material-symbols-rounded absolute left-[1.75rem] top-[1.75rem] text-[1.5rem] [text-shadow:0px_0px_12px_rgba(0,_248,_185,_0.25)]"
                        >
                            <svg
                                style={{"margin-left": '0.2vh'}}
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="2.5vh"
                                width="1.8vh" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M256 112a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56z"
                                ></path>
                                
                                <path
                                    d="m432 112.8-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 0 0-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 0 0-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 0 0 .08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 0 0 1.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                        <div class="flex w-1/2 flex-col place-content-center pl-20 pt-1">
                        <div class="text-xl font-semibold [text-shadow:0px_0px_5px_rgba(0,_248,_185,_0.05)]">Body</div>
                        <div class="text-[0.88rem] leading-[108.5%] text-gray-300">0.0kg / 125.0kg</div>
                    </div>
                    <div class="flex-grow pr-2"></div>
                </div>

                <div class="flex w-full items-center justify-between">
                    <AccessoriesLeft />
                    
                    <CharacterWounding />

                    <AccessoriesRight />
                </div>
            </div>

            <Settings />
            <Help />

            <CharacterInformation />
        </div>
    )
}