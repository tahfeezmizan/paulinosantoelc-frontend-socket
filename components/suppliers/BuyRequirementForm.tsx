"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBuyRequirementMutation } from "@/redux/api/buyRequirementApi";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";

// Form validation schema
const formSchema = z.object({
  productName: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  productCategory: z.string({
    required_error: "Please select a product category.",
  }),
  details: z.string().min(10, {
    message: "Requirement must be at least 10 characters.",
  }),
});

export default function BuyRequirementForm() {
  const [createBuyRequirement] = useCreateBuyRequirementMutation();
  const { data: products } = useGetAllProductsQuery({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productCategory: "",
      details: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const res = await createBuyRequirement(values).unwrap();
      form.reset();

      console.log(res);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold hanken-text border-custom">
        Post Buy Requirement
      </h1>
      <p className="text-textBlack mb-4">
        Get quick response from worldwide suppliers
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Product Name You Need.."
                    className="h-12 "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productCategory"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Product Category.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products?.map((product: ProductTypes) => (
                      <SelectItem
                        key={product.category}
                        value={product.category.toLowerCase()}
                      >
                        {product.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Discover your buying requirement.."
                    className="min-h-[120px] resize-none text-textGray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 text-base bg-customBlue hover:bg-customButtonHoverBlue"
          >
            Post Your Buy Requirement
          </Button>
        </form>
      </Form>
    </div>
  );
}
