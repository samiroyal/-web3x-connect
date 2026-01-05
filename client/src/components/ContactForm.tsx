import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import type { z } from "zod";

export function ContactForm() {
  const mutation = useSubmitContact();
  
  const form = useForm<z.infer<typeof insertContactSchema>>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      projectName: "",
      ecosystem: "",
      description: "",
      contactInfo: "",
    },
  });

  function onSubmit(data: z.infer<typeof insertContactSchema>) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="bg-secondary/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">Let's Build Your Community</h3>
        <p className="text-muted-foreground">
          Tell me about your project and where you need help.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Satoshi Nakamoto" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Next Big DAO" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ecosystem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ecosystem</FormLabel>
                  <FormControl>
                    <Input placeholder="Solana, Ethereum, Sui..." className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Info (Email, X, Discord)</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com or @handle" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Briefly describe your project and what you're looking for..." 
                    className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
