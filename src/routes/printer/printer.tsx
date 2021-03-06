import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Printer = () => {
  const printer = useQuery('printer', window.invoke.printer);

  return (<Carpet>

    <h2>Printers</h2>

    <>
    {printer?.data && printer.data.map((d, i) => (
      <DetailCard label={d.name} key={i}>
        <Detail label="ID" value={d.id} />
        <Detail label="Model" value={d.model} />
        <Detail label="printer URI" value={d.uri} />
        <Detail label="UUID" value={d.uuid} />
        <Detail label="status" value={d.status} />
        <Detail label="local" value={d.local} />
        <Detail label="default" value={d.default} />
        <Detail label="shared" value={d.shared} />
      </DetailCard>
    ))}

    </>

  </Carpet>
)
}

export const PRINTER_URL = '/printer';