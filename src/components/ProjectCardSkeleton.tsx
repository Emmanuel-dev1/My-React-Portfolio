export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="aspect-video bg-gray-300 dark:bg-gray-800" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded" />
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-5/6" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-16" />
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-20" />
        </div>
      </div>
    </div>
  );
}