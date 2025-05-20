import { ExternalLink, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SupplierInfo() {
  return (
    <Card className="">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-xl font-semibold hanken-text">Supplier Info</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium min-w-32">Company Name :</span>
            <div className="flex items-center gap-2">
            <Image
                src="/flag-australia.svg"
                alt="Australia flag"
                width={20} // Default width for large screens
                height={14} // Default height for large screens
                className="w-5 h-3.5 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6"
                priority
                />
              <span>Australia</span>
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="font-medium min-w-32">Business Type :</span>
            <div className="flex items-center gap-2">
              <span>• Wholesaler</span>
              <span>• Trading</span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="font-medium min-w-32">Supplier Phone :</span>
            <span>+3168425xxxxx</span>
          </div>

          <div className="flex items-center pt-2">
            <div className="flex items-center gap-2 text-blue-500">
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">View All Product :</span>
              <span>View all products</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-2 text-blue-500">
              <User className="w-4 h-4" />
              <span className="font-medium">View Company Profile :</span>
              <span>View Company Profile</span>
            </div>
          </div>

          <div className="pt-4 text-gray-700">
            <p className="text-sm leading-relaxed">
              Main Agri BV, headquartered in Rotterdam, the Netherlands, is a distinguished private trading company that
              provides global business solutions. Our focus lies in offering quality branded products at competitive
              wholesale prices bolstered by exceptional logistics services. At Main Agri BV, we operate as AD
              Enterprises, an import and export entity...{" "}
              <span className="text-blue-500 cursor-pointer">View Profile</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
