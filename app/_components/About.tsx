"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <h1 className="font-absans cursor-pointer font-medium text-sm">
            About
          </h1>
        </SheetTrigger>
        <SheetContent className="bg-green-50 w-full" side="left">
          <div className="flex justify-center items-center w-full flex-col font-absans">
            <SheetHeader>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "anticipate", delay: 0.4 }}
                className="text-2xl font-bold"
              >
                Know Thyself
              </motion.h1>
            </SheetHeader>
            <div className="text-sm font-semibold flex flex-col gap-y-4 justify-center items-center text-center my-6 p-8">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "anticipate", delay: 0.4 }}
              >
                I spend most of my days with fleeting thoughts. Coding. Learning
                and Creating projects. The morning rides keep me on a hill of
                silence. I go weeks without a phone.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.4 }}
              >
                Love, loss, and grief have disturbed my comfort zone, but the
                glimmers of God speak through my work ethic. While the world
                around me evolves, I reflect on what matters the most. The life
                in which my creativity will land next.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "anticipate", delay: 0.4 }}
              >
                There&#39;s beauty in completion. And always faith in the
                unknown.
              </motion.p>
            </div>
            <SheetFooter>
              <Button asChild size="sm" variant="secondary">
                <Link
                  target="_blank"
                  href="https://www.canva.com/design/DAGOviJK-SI/Srzb8IYnAFDU8TY1431_rA/view?utm_content=DAGOviJK-SI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                >
                  Resume
                </Link>
              </Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default About;
