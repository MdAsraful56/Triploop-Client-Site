import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useAddDivisionMutation } from '../../../../redux/features/division/division.api';
import SingleImageUploader from '../../../SingleImageUploader';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../ui/form';
import { Textarea } from '../../../ui/textarea';

type AddDivisionFormValues = {
    name: string;
    description?: string;
};

export function AddDivisionModel() {
    const form = useForm<AddDivisionFormValues>();
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false);
    const [addDivision] = useAddDivisionMutation();

    const onSubmit = async (data: AddDivisionFormValues) => {
        try {
            const formData = new FormData();

            formData.append('data', JSON.stringify(data));
            formData.append('file', image as File);

            const res = await addDivision(formData).unwrap();
            if (res.success) {
                toast.success('Division added successfully!');
                form.reset();
                setImage(null);
            } else {
                toast.error(res.message || 'Failed to add division.');
            }
        } catch (error) {
            console.error('Error adding division:', error);
            toast.error('Failed to add division. Please try again.');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant='outline'>Add Division</Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Add Division</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            id='add-division'
                            className='space-y-4'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Division Name'
                                                {...field}
                                                value={field.value || ''}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='description'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder='Division Description'
                                                {...field}
                                                value={field.value || ''}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>

                        <SingleImageUploader onChange={setImage} />
                    </Form>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant='outline'>Cancel</Button>
                        </DialogClose>
                        <Button
                            disabled={!image}
                            form='add-division'
                            type='submit'
                        >
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
