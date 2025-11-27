"use client";

import { Loader } from "@/components/ai-elements/loader";

const Example = () => (
  <div className="flex items-center gap-8 p-8">
    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Small (16px)</p>
      <Loader size="sm" />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Medium (24px)</p>
      <Loader size="md" />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Large (32px)</p>
      <Loader size="lg" />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Extra Large (48px)</p>
      <Loader size="lg" />
    </div>
  </div>
);

export default Example;
