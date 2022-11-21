import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./CreateElement";
import { TFormCreateBook } from "../../../../../../types/Forms";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../otherComps/Buttons/Button";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import { useGQLCreateBook, useGQLGetFormBook } from "../useGQLBook";
import ShowMessage from "../../../../../otherComps/ShowMessage";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormCreateBook>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminNavCtx);

  const { createBook, data, error, loading } = useGQLCreateBook();

  const { dataForm, errorForm, loadForm } = useGQLGetFormBook();
  const onSubmit = async (values: TFormCreateBook) => {
    await createBook(values);
  };

  useEffect(() => {
    if (data) {
      reset();
      dispatch({
        type: "SHOW_POPUP",
        value: { name: "BOOK_DETAIL", bookId: data.id },
      });
    }
  }, [data]);

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="title"
              register={register}
              label="Judul"
              error={errors.title ? true : false}
              disabled={loading}
              message={errors.title ? errors.title.message : null}
            />
            <El.SpanGroup>
              <FormsControl
                control="select"
                name="coverType"
                register={register}
                label="Tipe Cetakan"
                options={[
                  { id: "HARD COVER", value: "Hard Cover" },
                  { id: "EBOOK", value: "Ebook" },
                ]}
                error={errors.coverType ? true : false}
                disabled={loading}
                message={errors.coverType ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="select"
                name="condition"
                register={register}
                label="Kondisi"
                options={[
                  { id: "NEW", value: "Baru" },
                  { id: "PRELOVED", value: "Preloved" },
                ]}
                error={errors.condition ? true : false}
                disabled={loading}
                message={errors.condition ? "Required" : null}
                clearError={clearErrors}
              />
            </El.SpanGroup>
            <El.SpanGroup>
              <FormsControl
                control="select"
                name="authorId"
                register={register}
                label="Kepengarangan"
                options={
                  !dataForm
                    ? null
                    : dataForm.authors.map((author) => ({
                        id: author.id,
                        value: author.name,
                      }))
                }
                error={errors.authorId ? true : false}
                disabled={loading}
                isLoading={loadForm}
                message={errors.authorId ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="input"
                type="number"
                name="numberOfPages"
                register={register}
                label="Jumlah Halaman"
                error={errors.numberOfPages ? true : false}
                disabled={loading}
                message={
                  errors.numberOfPages ? errors.numberOfPages.message : null
                }
              />
            </El.SpanGroup>
            <FormsControl
              control="textarea"
              name="description"
              register={register}
              label="Sinopsis / subject"
              error={errors.description ? true : false}
              disabled={loading}
              message={errors.description ? errors.description.message : null}
            />
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="text"
                name="edition"
                register={register}
                label="Edisi"
                error={errors.edition ? true : false}
                disabled={loading}
                message={errors.edition ? errors.edition.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="series"
                register={register}
                label="Seri"
                error={errors.series ? true : false}
                disabled={loading}
                message={errors.series ? errors.series.message : null}
              />
            </El.SpanGroup>
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="number"
                name="length"
                register={register}
                label="Panjang (cm)"
                error={errors.length ? true : false}
                disabled={loading}
                message={errors.length ? errors.length.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="width"
                register={register}
                label="Lebar (cm)"
                error={errors.width ? true : false}
                disabled={loading}
                message={errors.width ? errors.width.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="weight"
                register={register}
                label="Berat (gram)"
                error={errors.weight ? true : false}
                disabled={loading}
                message={errors.weight ? errors.weight.message : null}
              />
            </El.SpanGroup>
          </El.InputGroup>
          <El.InputGroup>
            <El.SpanGroupGrid2>
              <FormsControl
                control="select"
                name="publisherId"
                register={register}
                label="Penerbit"
                options={
                  !dataForm
                    ? null
                    : dataForm.publishers.map((publisher) => ({
                        id: publisher.id,
                        value: publisher.name,
                      }))
                }
                error={errors.publisherId ? true : false}
                disabled={loading}
                isLoading={loadForm}
                message={errors.publisherId ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="input"
                type="number"
                name="releaseYear"
                register={register}
                label="Tahun Terbit"
                error={errors.releaseYear ? true : false}
                disabled={loading}
                message={errors.releaseYear ? errors.releaseYear.message : null}
              />
            </El.SpanGroupGrid2>
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="text"
                name="language"
                register={register}
                label="Bahasa"
                error={!!errors?.language}
                disabled={loading}
                message={errors.language?.message}
              />
              <FormsControl
                control="input"
                type="number"
                name="isbn"
                register={register}
                label="ISBN"
                error={!!errors?.isbn}
                disabled={loading}
                message={errors.isbn?.message}
              />
            </El.SpanGroup>
            <El.SpanGroup>
              <FormsControl
                control="select"
                name="libraryType"
                register={register}
                label="Jenis Pustaka"
                options={
                  !dataForm
                    ? null
                    : dataForm.categories
                        .filter((category) => category.group === "LibraryType")
                        .map((category) => ({
                          id: category.id,
                          value: category.name,
                        }))
                }
                error={errors.libraryType ? true : false}
                disabled={loading}
                isLoading={loadForm}
                message={errors.libraryType ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="select"
                name="readerGroup"
                register={register}
                label="Kelompok Baca"
                options={
                  !dataForm
                    ? null
                    : dataForm.categories
                        .filter((category) => category.group === "ReaderGroup")
                        .map((category) => ({
                          id: category.id,
                          value: category.name,
                        }))
                }
                error={errors.readerGroup ? true : false}
                disabled={loading}
                isLoading={loadForm}
                message={errors.readerGroup ? "Required" : null}
                clearError={clearErrors}
              />
            </El.SpanGroup>
            <El.SpanGroupGrid3>
              <FormsControl
                control="input"
                type="number"
                name="stock"
                register={register}
                label="Stok"
                error={errors.stock ? true : false}
                disabled={loading}
                message={errors.stock ? errors.stock.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="price"
                register={register}
                label="Harga (Rp)"
                error={errors.price ? true : false}
                disabled={loading}
                message={errors.price ? errors.price.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="discount"
                register={register}
                label="Diskon (%)"
                error={errors.discount ? true : false}
                disabled={loading}
                message={errors.discount ? errors.discount.message : null}
              />
            </El.SpanGroupGrid3>
            <FormsControl
              control="selectMultiple"
              name="categories"
              register={register}
              label="Kategori Lainnya (opsi)"
              options={
                !dataForm
                  ? null
                  : dataForm.categories
                      .filter((category) => category.group === "Other")
                      .map((category) => ({
                        id: category.id,
                        value: category.name,
                      }))
              }
              error={errors.categories ? true : false}
              disabled={loading}
              isLoading={loadForm}
              message={errors.categories ? "Required" : null}
              clearError={clearErrors}
            />
            <FormsControl
              control="file"
              name="cover"
              register={register}
              label="Cover (opsi)"
              accept="image/jpeg, image/png"
              error={errors.cover ? true : false}
              disabled={loading}
              message={errors.cover ? errors.cover.message : null}
            />
          </El.InputGroup>
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            isLoading={loading}
            disabled={loading}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default Create;
