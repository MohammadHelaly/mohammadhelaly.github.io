import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import FormInput from "@/components/form-input";
import Notification from "@/components/notification";
import { useSubmitContactForm } from "@/api/services/contact";

const schema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please enter a valid email." }),
  message: z.string().min(1, { message: "Please enter your message." }),
});

type schemaType = z.infer<typeof schema>;

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const ContactForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schemaType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
    resolver: zodResolver(schema),
  });

  const { mutate, isError, isPending, isSuccess } = useSubmitContactForm({
    onSettled: () => {
      setDialogOpen(true);

      setTimeout(() => {
        setDialogOpen(false);
      }, 5000);
    },
  });

  const formSubmitHandler = (data: schemaType) => {
    mutate(data);
    reset();
  };

  const buttonDisabled = isPending || Object.keys(errors).length > 0;
  const notificationVariant = isSuccess ? "success" : "error";
  const notificationText = isSuccess
    ? "Thanks for reaching out! I'll get back to you as soon as possible."
    : isError
      ? "Something went wrong. Please try again."
      : "";

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-6 lg:items-start lg:px-20 lg:py-6 xl:px-24">
      <form
        id="contact-form"
        method="POST"
        onSubmit={handleSubmit(formSubmitHandler)}
        className="mx-auto flex w-full max-w-80 flex-col gap-6"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Name *"
              id="name"
              variant="input"
              type="text"
              error={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Email *"
              id="email"
              variant="input"
              type="email"
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Message *"
              id="message"
              variant="text-area"
              rows={3}
              error={errors.message?.message}
              {...field}
            />
          )}
        />
        <motion.button
          variants={buttonVariants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          id="contact-form-button"
          type="submit"
          disabled={buttonDisabled}
          className="h-10 w-full rounded-none border-2 border-black bg-white font-manrope text-sm text-black transition-colors duration-200 ease-in-out hover:bg-black hover:text-white disabled:cursor-not-allowed"
        >
          Send
        </motion.button>
      </form>
      <Notification
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        text={notificationText}
        variant={notificationVariant}
      />
    </div>
  );
};

export default ContactForm;
