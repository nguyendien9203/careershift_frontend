import React from "react";
import { Event } from "../../types/event";

const UserSchedule: React.FC = () => {
  // Khai báo events với kiểu Event[]
  const events: Event[] = [];

  return (
    <div className="p-6">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lịch phỏng vấn của User</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Thêm lịch phỏng vấn
        </button>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm lịch phỏng vấn..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex">
        {/* Bộ lọc bên trái */}
        <div className="w-1/4 pr-4">
          {/* Trạng thái phỏng vấn */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Trạng thái phỏng vấn</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Đã hoàn thành (0)
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Đang chờ xử lý (0)
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Đã hủy (0)
            </label>
          </div>

          {/* Thời gian */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Thời gian</h3>
            <select className="w-full p-2 border rounded">
              <option>Hôm nay</option>
              <option>Tuần này</option>
              <option>Tháng này</option>
              <option>Tùy chỉnh</option>
            </select>
          </div>

          {/* Ứng viên liên quan */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Ứng viên liên quan</h3>
            <select className="w-full p-2 border rounded mb-2">
              <option>Ứng viên liên quan</option>
              <option>Không có ứng viên</option>
            </select>
            <button className="text-blue-500">Thêm ứng viên</button>
          </div>
        </div>

        {/* Khu vực hiển thị dữ liệu */}
        <div className="w-3/4">
          {events.length === 0 ? (
            <p className="text-gray-500">
              Không tìm thấy lịch phỏng vấn nào phù hợp với tiêu chí của bạn.
            </p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Tên phỏng vấn</th>
                  <th className="p-2 text-left">Thời gian</th>
                  <th className="p-2 text-left">Trạng thái</th>
                  <th className="p-2 text-left">Ứng viên liên quan</th>
                  <th className="p-2 text-left">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b">
                    <td className="p-2">{event.name}</td>
                    <td className="p-2">{event.time}</td>
                    <td className="p-2">{event.status}</td>
                    <td className="p-2">{event.relatedPerson}</td>
                    <td className="p-2">
                      <button className="text-blue-500">Xem chi tiết</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Phân trang */}
          <div className="flex justify-end mt-4">
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSchedule;