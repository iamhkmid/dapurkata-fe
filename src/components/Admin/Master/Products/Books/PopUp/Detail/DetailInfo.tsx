import moment from "moment";
import "moment/locale/id";
import { TGetBook } from "../../../../../../../types/book";
import * as El from "./DetailInfoElement";
import ImageResponsive from "../../../../../../otherComps/ImageResponsive";
import NumberFormat from "react-number-format";
import { FC } from "react";

type TProps = { data: TGetBook };
const DetailInfo: FC<TProps> = ({ data }) => {
  const coverData = data.BookPicture.find((img) => img.type === "COVER");
  return (
    <El.Container>
      <El.Section>
        <El.CoverWrapper>
          <ImageResponsive
            src={coverData?.url}
            alt={data.title}
            height={290}
            width={200}
            quality={75}
            defaultIcon="dapurkata"
          />
        </El.CoverWrapper>
      </El.Section>

      <El.BookInfo>
        <div className="title-wrapper">
          <h1 className="title">{data.title}</h1>
          <h1 className="author">{data.Author.name}</h1>
        </div>
        <div>
          <h1 className="label">BookId</h1>
          <h1 className="value">{data.id}</h1>
        </div>
        <div>
          <h1 className="label">Deskripsi</h1>
          <div className="description">{data.description}</div>
        </div>
        <div className="item-wrapper">
          <h1 className="label">Kategori </h1>
          <El.CategoryWrapper>
            {data.Category.map((value) => (
              <El.Category key={value.name}>{value.name}</El.Category>
            ))}
          </El.CategoryWrapper>
        </div>
        <El.DetailWrapper>
          <div className="detail-group">
            <div className="item-wrapper">
              <h1 className="label">Kondisi</h1>
              <h1 className="value">{data.condition}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Tipe Cover</h1>
              <h1 className="value">{data.coverType}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Tahun Rilis</h1>
              <h1 className="value">{data.releaseYear}</h1>
            </div>

            <div className="item-wrapper">
              <h1 className="label">Bahasa</h1>
              <h1 className="value">{data.language}</h1>
            </div>
          </div>
          <div className="detail-group">
            <div className="item-wrapper">
              <h1 className="label">Jumlah Halaman</h1>
              <h1 className="value">{data.numberOfPages}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Panjang</h1>
              <h1 className="value">{`${data.length} cm`}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Lebar</h1>
              <h1 className="value">{`${data.width} cm`}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Berat</h1>
              <h1 className="value">{`${data.weight} gram`}</h1>
            </div>
          </div>
          <div className="detail-group">
            <div className="item-wrapper">
              <h1 className="label">Stok</h1>
              <h1 className="value">{data.stock}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Harga</h1>
              <div className="price">
                <NumberFormat
                  prefix="Rp"
                  value={data.price}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                />
              </div>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Diskon</h1>
              <h1 className="value">{`${data.discount} %`}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">ISBN</h1>
              <h1 className="value">{data.isbn}</h1>
            </div>
          </div>
          <div className="detail-group">
            <div className="item-wrapper">
              <h1 className="label">Edisi</h1>
              <h1 className="value">{data.edition}</h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Seri</h1>
              <h1 className="value">{data.series}</h1>
            </div>

            <div className="item-wrapper">
              <h1 className="label">Update At</h1>
              <h1 className="value">
                {moment(data.updatedAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
            <div className="item-wrapper">
              <h1 className="label">Create At</h1>
              <h1 className="value">
                {moment(data.createdAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
          </div>
        </El.DetailWrapper>
      </El.BookInfo>
    </El.Container>
  );
};

export default DetailInfo;
