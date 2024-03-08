/* eslint-disable */

import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";

// An example response from the livepeer playback info API endpoint
export const vodSource = {
    type: "vod",
    meta: {
        playbackPolicy: null,
        source: [
            {
                hrn: "HLS (TS)",
                type: "html5/application/vnd.apple.mpegurl",
                url: "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/184cfiu4ek66unf4/index.m3u8",
            },
        ],
    },
};

// This is either an array of `Src` or null,
// and can be passed into the Player.Root `src`
const src = getSrc(vodSource);

export default () => (
    <Player.Root src={src}>{/* All child components. */}</Player.Root>
);
