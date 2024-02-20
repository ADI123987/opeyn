"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SectionCTALayout3 = () => {
  return (
    <section className="pb-16 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-xl px-6 py-20 text-center shadow-sm dark:shadow-slate-950/40">
              <Image
                src="/hero/gradient_creative.png"
                className="dark:hidden"
                fill
                priority
                sizes="100vw"
                alt="consulting hero gradient"
              />
              <Image
                src="/hero/gradient_creative_dark.png"
                className="hidden dark:block"
                fill
                alt="consulting hero gradient"
              />
              <div className="relative mx-auto max-w-md">
                <h2 className="mb-4">
                  Would you like some help getting started?
                </h2>
                <p className="mb-8 text-lg">
                  Our support heroes will have you up and running in less than
                  10mins.
                </p>
                <Button size="lg">Let’s Work Together</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTALayout3;
