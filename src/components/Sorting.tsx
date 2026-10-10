'use client'

import {ListBox, Select} from "@heroui/react";

export type SortBy = 'default' | 'lowtohigh' | 'hightolow';

interface SortingProps{
    sortBy: SortBy;
    onSortChange: (value: SortBy) => void;
}

const Sorting = ({sortBy, onSortChange}: SortingProps) => {

  return (
    <div className="flex items-center gap-2 self-end pb-1 sm:pb-3">
      <label className="text-lg text-neutral-600" htmlFor="sort-products">
        সাজান
      </label>

      <Select className="w-40" placeholder="ডিফল্ট"
      value={sortBy}
      onChange={(value) => {
        if(typeof value === 'string'){
            onSortChange(value as SortBy)
        }
      }}>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item id="default" textValue="ডিফল্ট">
              ডিফল্ট
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="lowtohigh" textValue="দাম: কম থেকে বেশি">
              দাম: কম থেকে বেশি
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="hightolow" textValue="দাম: বেশি থেকে কম">
              দাম: বেশি থেকে কম
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default Sorting;
