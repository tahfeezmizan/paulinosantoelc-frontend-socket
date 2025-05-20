import { LoginForm } from "./login-form";
import { SignupPromo } from "./signup-promo";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full container grid md:grid-cols-2 gap-10 rounded-xl overflow-hidden">
        {/* Login Section */}
        <div className="bg-[#ebf9ff] p-6 md:p-10 lg:p-20 rounded">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Member Login
            </h1>
            <LoginForm />
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="bg-[#ebf9ff] p-6 md:p-10 lg:p-20 flex items-center justify-center rounded">
          <div className="w-full max-w-3xl mx-auto flex flex-col items-start">
            <SignupPromo />
          </div>
        </div>
      </div>
    </div>
  );
}
