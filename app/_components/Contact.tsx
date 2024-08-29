import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <h1 className="font-absans cursor-pointer font-medium text-sm">
            Contact
          </h1>
        </SheetTrigger>
        <SheetContent className="bg-green-50 w-full" side="right">
          <div className="flex justify-center items-center w-full flex-col font-absans">
            <SheetHeader>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "anticipate", delay: 0.4 }}
                className="text-2xl font-bold"
              >
                More Me
              </motion.h1>
            </SheetHeader>
            <div className="text-sm font-semibold flex flex-col gap-y-4 justify-center items-center text-center my-6 p-8">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "anticipate", delay: 0.4 }}
              >
                I have created four distinct projects... Online Cloud based
                Virtual Whiteboard, Online Cloud based Self-Healing Journal,
                Online Cloud based Financial Expense Tracker and My Online Cafe
                Business. There are other projects that are not mentioned here
                but you can find their links and source codes at my github repo.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.4 }}
              >
                I have accomplished certificates in libraries of Javascript like
                React, Node & Express, Fullstack MERN Web Development, SQL and
                NoSQL Databases, Clouds Technologies and things of that nature.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "anticipate", delay: 0.4 }}
              >
                Mail: saadsyed950@gmail.com
                <br />
                Phone: +91-7887630243
              </motion.p>
            </div>
            <SheetFooter>
              <Button asChild size="sm" variant="primary">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/saad-sayyed-trev/"
                >
                  LinkedIn Profile
                </Link>
              </Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Contact;
