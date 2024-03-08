"use client";

import DashboardNav from "@/components/dashboard-nav";
import DashboardTabs from "@/components/dashboard-tabs";
import DashboardContent from "@/components/dashboard-content";
import React from "react";
import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
import { vodSource } from "@/components/source";
import { useEffect, useRef, useState } from "react";

const DashboardPage = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (parentRef.current) {
      setIsMounted(true);
    }
  }, []);
    return (
      <main>
        <DashboardNav />
        <DashboardTabs />
         <DashboardContent />
        <div
          style={{
            height: 200,
            width: 300,
            margin: "auto",
          }}
          ref={parentRef}
        />
        <Player.Root src={getSrc(vodSource)} autoPlay volume={0}>
          <Player.Container
            style={{
              margin: "auto",
              borderRadius: 5,
              outline: "white solid 1px",
              overflow: "hidden",
              width: 300,
              height: 200,
            }}
          >
            <Player.Video
              title="Agent 327"
              style={{ height: "100%", width: "100%" }}
            />
            {isMounted && (
              <Player.Portal container={parentRef.current}>
                <Player.Time />
              </Player.Portal>
            )}
          </Player.Container>
        </Player.Root>
          </main>
        );
      };

      export default DashboardPage;
