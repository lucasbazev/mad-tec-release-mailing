import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/app/LoadingSpinner";
import { MobileMenu } from "../Menu";

interface IPageHeader {
  title: string;
  buttonProps?: React.ComponentProps<"button">[];
  loadingAction?: boolean;
}

export const PageHeader = ({
  title,
  buttonProps,
  loadingAction,
}: IPageHeader) => {
  return (
    <div className="w-full flex items-center justify-between mb-16 bg-white border border-gray-200 p-4 rounded-xl">
      <div>
        <MobileMenu />
        <p className="text-xl font-bold mt-8 xl:mt-0">{title}</p>
      </div>

      {!!buttonProps && (
        <div className="flex gap-x-1 md:gap-x-4">
          {loadingAction ? (
            <LoadingSpinner />
          ) : (
            buttonProps.map(
              (button, index) =>
                !!button && (
                  <Button key={`header_action_button_${index}`} {...button}>
                    {button.children}
                  </Button>
                ),
            )
          )}
        </div>
      )}
    </div>
  );
};
