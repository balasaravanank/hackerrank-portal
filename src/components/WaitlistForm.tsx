"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const DEPARTMENTS = ["AIDS", "AIML", "CSE", "CSE IOT", "CSE CYB", "EEE", "ECE", "MECH", "BIO"];

const steps = [
  { id: "name", title: "Name" },
  { id: "email", title: "Email" },
  { id: "details", title: "Details" },
  { id: "reason", title: "Reason" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "",
    department: "",
    reason: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setApiError("");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return form.name.trim() !== "";
      case 1:
        return form.email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      case 2:
        return form.year !== "" && form.department !== "";
      case 3:
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1 && isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid()) return;
    setSubmitting(true);
    setApiError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setApiError(data.error || "Something went wrong");
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="px-6 py-20 sm:py-28 border-t border-border bg-surface">
        <div className="max-w-lg mx-auto">
          <Card className="border border-border shadow-md rounded-2xl">
            <div className="py-14 px-6 text-center">
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                className="inline-flex items-center justify-center size-16 rounded-full bg-accent/10 mb-6"
              >
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Check className="size-8 text-accent" strokeWidth={2.5} />
                </motion.div>
              </motion.div>

              {/* Greeting */}
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease }}
                className="text-2xl font-bold text-foreground"
              >
                Welcome aboard, {form.name.split(" ")[0]}!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease }}
                className="mt-3 text-base text-foreground/60 max-w-xs mx-auto leading-relaxed"
              >
                You&apos;re officially on the waitlist. We&apos;ll drop you an email at{" "}
                <span className="font-medium text-foreground/80">{form.email}</span>{" "}
                the moment Campus Crew goes live at Saveetha.
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8 mb-6 h-px bg-border mx-12"
              />

              {/* Fun detail */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="space-y-1"
              >
                <p className="text-sm text-foreground/40 uppercase tracking-wider font-medium">Your details</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {form.year || "Student"}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1 text-sm font-medium text-foreground/60">
                    {form.department || "Undeclared"}
                  </span>
                </div>
              </motion.div>

              {/* Share nudge */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-8 text-sm text-foreground/40"
              >
                Know someone who&apos;d love this? Share the link with your friends.
              </motion.p>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="px-6 py-20 sm:py-28 border-t border-border bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] leading-tight text-foreground text-center">
          Join the waitlist
        </h2>
        <p className="mt-3 text-base text-foreground/50 text-center">
          Takes less than a minute. Early signups get priority when we launch.
        </p>

        {/* Progress dots */}
        <motion.div
          className="mt-10 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className={cn(
                    "w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                    index < currentStep
                      ? "bg-accent"
                      : index === currentStep
                        ? "bg-accent ring-4 ring-accent/20"
                        : "bg-border",
                  )}
                  onClick={() => {
                    if (index <= currentStep) setCurrentStep(index);
                  }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.span
                  className={cn(
                    "text-xs mt-1.5 hidden sm:block",
                    index === currentStep
                      ? "text-accent font-medium"
                      : "text-foreground/40",
                  )}
                >
                  {step.title}
                </motion.span>
              </motion.div>
            ))}
          </div>
          <div className="w-full bg-border h-1.5 rounded-full overflow-hidden mt-2">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Form card */}
        <Card className="border border-border shadow-md rounded-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {/* Step 1: Name */}
              {currentStep === 0 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">What&apos;s your name?</CardTitle>
                    <CardDescription>First and last name.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g. Arun Kumar"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && nextStep()}
                        autoFocus
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      />
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* Step 2: Email */}
              {currentStep === 1 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Your email address?</CardTitle>
                    <CardDescription>We&apos;ll only use this to notify you when we launch.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g. arun@saveetha.ac.in"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && nextStep()}
                        autoFocus
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      />
                      {form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
                        <p className="text-sm text-destructive">Enter a valid email address</p>
                      )}
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* Step 3: Year + Department */}
              {currentStep === 2 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Your academic details</CardTitle>
                    <CardDescription>Year of study and department.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label>Year of study</Label>
                      <div className="flex flex-wrap gap-2">
                        {YEARS.map((y, index) => (
                          <motion.button
                            key={y}
                            type="button"
                            onClick={() => update("year", y)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer",
                              form.year === y
                                ? "bg-accent text-white border-accent"
                                : "bg-background text-foreground/60 border-border hover:border-accent/40"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * index, duration: 0.3 } }}
                          >
                            {y}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select value={form.department} onValueChange={(v) => update("department", v)}>
                        <SelectTrigger
                          id="department"
                          className="transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                        >
                          <SelectValue placeholder="Select your department" />
                        </SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map((d) => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* Step 4: Reason */}
              {currentStep === 3 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Why do you want to join?</CardTitle>
                    <CardDescription>Optional -a sentence or two is fine.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="reason">Your reason</Label>
                      <Textarea
                        id="reason"
                        placeholder="I'm interested because..."
                        value={form.reason}
                        onChange={(e) => update("reason", e.target.value)}
                        autoFocus
                        className="min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
                      />
                    </motion.div>
                  </CardContent>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* API error */}
          {apiError && (
            <div className="px-6 pb-2">
              <p className="text-sm text-destructive text-center">{apiError}</p>
            </div>
          )}

          <CardFooter className="flex justify-between pt-4 pb-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1 rounded-full cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                disabled={!isStepValid() || submitting}
                className="flex items-center gap-1 rounded-full cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : currentStep === steps.length - 1 ? (
                  <>
                    Submit <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>

        {/* Step text */}
        <motion.p
          className="mt-4 text-center text-sm text-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
        </motion.p>
      </motion.div>
    </section>
  );
}
